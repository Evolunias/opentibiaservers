import EvoNilotServersKeywordPage, { generateMetadata } from './evo-nilot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoNilotServersKeywordPage />;
}
