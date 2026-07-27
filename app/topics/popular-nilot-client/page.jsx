import PopularNilotClientKeywordPage, { generateMetadata } from './popular-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotClientKeywordPage />;
}
