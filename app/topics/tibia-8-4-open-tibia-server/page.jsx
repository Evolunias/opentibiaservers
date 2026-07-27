import Tibia84OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-8-4-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OpenTibiaServerKeywordPage />;
}
