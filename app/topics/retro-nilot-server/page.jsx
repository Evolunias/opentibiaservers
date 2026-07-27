import RetroNilotServerKeywordPage, { generateMetadata } from './retro-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroNilotServerKeywordPage />;
}
