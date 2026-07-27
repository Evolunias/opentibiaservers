import NonPvpNilotServerKeywordPage, { generateMetadata } from './non-pvp-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpNilotServerKeywordPage />;
}
