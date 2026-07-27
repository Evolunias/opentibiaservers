import JameraKeywordPage, { generateMetadata } from './jamera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraKeywordPage />;
}
