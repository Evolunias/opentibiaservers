import BaiakGoPage, { generateMetadata } from './baiak-go';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakGoPage />;
}
