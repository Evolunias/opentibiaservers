import LightotPage, { generateMetadata } from './lightot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LightotPage />;
}
