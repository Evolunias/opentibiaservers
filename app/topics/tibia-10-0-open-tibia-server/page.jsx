import Tibia100OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-10-0-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100OpenTibiaServerKeywordPage />;
}
