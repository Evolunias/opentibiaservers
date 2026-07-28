import RmePage, { generateMetadata } from './rme';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RmePage />;
}
