import ActiveNilotServerKeywordPage, { generateMetadata } from './active-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotServerKeywordPage />;
}
