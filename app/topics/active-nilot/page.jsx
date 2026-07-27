import ActiveNilotKeywordPage, { generateMetadata } from './active-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotKeywordPage />;
}
