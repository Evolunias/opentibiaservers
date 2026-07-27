import AmeriaStatusKeywordPage, { generateMetadata } from './ameria-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaStatusKeywordPage />;
}
