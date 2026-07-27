import FreshStartNilotKeywordPage, { generateMetadata } from './fresh-start-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotKeywordPage />;
}
