import OpenTibiaServersUsaKeywordPage, { generateMetadata } from './open-tibia-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersUsaKeywordPage />;
}
