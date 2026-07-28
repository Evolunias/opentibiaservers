import MyAacPage, { generateMetadata } from './my-aac';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyAacPage />;
}
