import ThorniaWarsKeywordPage, { generateMetadata } from './thornia-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaWarsKeywordPage />;
}
