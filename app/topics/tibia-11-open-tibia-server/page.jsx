import Tibia11OpenTibiaServerKeywordPage, { generateMetadata } from './tibia-11-open-tibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OpenTibiaServerKeywordPage />;
}
