import EvoOpenTibiaServerNorthAmericaKeywordPage, { generateMetadata } from './evo-open-tibia-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerNorthAmericaKeywordPage />;
}
