import AetheraPage, { generateMetadata } from './aethera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AetheraPage />;
}
