import IronmanOtPage, { generateMetadata } from './ironman-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IronmanOtPage />;
}
