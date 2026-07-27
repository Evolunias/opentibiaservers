import OpenTibiaServersBrazilKeywordPage, { generateMetadata } from './open-tibia-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersBrazilKeywordPage />;
}
