import PvpeNilotServerKeywordPage, { generateMetadata } from './pvpe-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeNilotServerKeywordPage />;
}
