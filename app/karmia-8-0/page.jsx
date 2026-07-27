import Karmia80Page, { generateMetadata } from './karmia-8-0';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Karmia80Page />;
}
