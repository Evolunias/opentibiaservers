import ShadowArmsPage, { generateMetadata } from './shadow-arms';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowArmsPage />;
}
