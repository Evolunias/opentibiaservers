import TibiabasePage, { generateMetadata } from './tibiabase';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiabasePage />;
}
