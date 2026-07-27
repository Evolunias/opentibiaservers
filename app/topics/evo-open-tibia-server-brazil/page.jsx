import EvoOpenTibiaServerBrazilKeywordPage, { generateMetadata } from './evo-open-tibia-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerBrazilKeywordPage />;
}
