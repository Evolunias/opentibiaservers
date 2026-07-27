import ElderanNaPage, { generateMetadata } from './elderan-na';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderanNaPage />;
}
