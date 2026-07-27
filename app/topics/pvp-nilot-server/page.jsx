import PvpNilotServerKeywordPage, { generateMetadata } from './pvp-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpNilotServerKeywordPage />;
}
