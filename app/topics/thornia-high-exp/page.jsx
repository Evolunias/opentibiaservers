import ThorniaHighExpKeywordPage, { generateMetadata } from './thornia-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaHighExpKeywordPage />;
}
