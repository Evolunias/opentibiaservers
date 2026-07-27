import TibiaCustomServerGermanyKeywordPage, { generateMetadata } from './tibia-custom-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerGermanyKeywordPage />;
}
