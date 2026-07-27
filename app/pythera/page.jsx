import PytheraPage, { generateMetadata } from './pythera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraPage />;
}
