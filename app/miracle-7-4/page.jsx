import Miracle74Page, { generateMetadata } from './miracle-7-4';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle74Page />;
}
