import EvoNilotServerKeywordPage, { generateMetadata } from './evo-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNilotServerKeywordPage />;
}
