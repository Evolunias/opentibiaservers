import Tibia81OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-8-1-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OpenTibiaServerKeywordPage />;
}
