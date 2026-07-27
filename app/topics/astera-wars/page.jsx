import AsteraWarsKeywordPage, { generateMetadata } from './astera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraWarsKeywordPage />;
}
