import Titania74Page, { generateMetadata } from './titania-7-4';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Titania74Page />;
}
