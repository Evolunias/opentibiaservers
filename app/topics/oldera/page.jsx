import OlderaKeywordPage, { generateMetadata } from './oldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaKeywordPage />;
}
