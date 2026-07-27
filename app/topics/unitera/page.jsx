import UniteraKeywordPage, { generateMetadata } from './unitera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraKeywordPage />;
}
