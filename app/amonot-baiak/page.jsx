import AmonotBaiakPage, { generateMetadata } from './amonot-baiak';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmonotBaiakPage />;
}
