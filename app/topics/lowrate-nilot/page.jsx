import LowrateNilotKeywordPage, { generateMetadata } from './lowrate-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotKeywordPage />;
}
