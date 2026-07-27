import AsteraKeywordPage, { generateMetadata } from './astera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraKeywordPage />;
}
