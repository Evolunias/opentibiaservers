import LowExpSaintsotServerKeywordPage, { generateMetadata } from './low-exp-saintsot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSaintsotServerKeywordPage />;
}
