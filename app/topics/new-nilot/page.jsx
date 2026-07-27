import NewNilotKeywordPage, { generateMetadata } from './new-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotKeywordPage />;
}
