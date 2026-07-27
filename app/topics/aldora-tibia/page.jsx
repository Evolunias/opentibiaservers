import AldoraTibiaKeywordPage, { generateMetadata } from './aldora-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraTibiaKeywordPage />;
}
