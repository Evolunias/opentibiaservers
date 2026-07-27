import JameraWarsKeywordPage, { generateMetadata } from './jamera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraWarsKeywordPage />;
}
