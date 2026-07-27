import PopularNilotServerKeywordPage, { generateMetadata } from './popular-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotServerKeywordPage />;
}
