import OlderaStatusKeywordPage, { generateMetadata } from './oldera-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaStatusKeywordPage />;
}
