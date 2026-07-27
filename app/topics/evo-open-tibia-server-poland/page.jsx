import EvoOpenTibiaServerPolandKeywordPage, { generateMetadata } from './evo-open-tibia-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerPolandKeywordPage />;
}
