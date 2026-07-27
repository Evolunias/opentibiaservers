import AsteraServerKeywordPage, { generateMetadata } from './astera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraServerKeywordPage />;
}
