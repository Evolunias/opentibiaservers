import Realesta74Page, { generateMetadata } from './realesta-7-4';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta74Page />;
}
