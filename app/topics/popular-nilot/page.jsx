import PopularNilotKeywordPage, { generateMetadata } from './popular-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotKeywordPage />;
}
