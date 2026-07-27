import PopularNilotLoginKeywordPage, { generateMetadata } from './popular-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotLoginKeywordPage />;
}
